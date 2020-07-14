const fs = require('fs');

const NEW_VERSION = process.argv[2];
const GITHUB_SERVER_URL = process.argv[3];
const GITHUB_REPOSITORY = process.argv[4];
const REPO_URL = `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}`;
const CHANGELOG_FILE_PATH = './CHANGELOG.md';
const UNRELEASED_TITLE = '## [Unreleased]';
const UNRELEASED_LINK_PREFIX = `[unreleased]: ${REPO_URL}/compare/v`;

class Changelog {
    constructor(content) {
        this.splittedContent = content.split('\n');
        this.unreleasedTitleRowIndex = null;
    }

    get content() {
        return this.splittedContent.join('\n');
    }

    getLastVersion() {
        return this.splittedContent
            .find((r) => r.startsWith(UNRELEASED_LINK_PREFIX))
            .replace(UNRELEASED_LINK_PREFIX, '')
            .replace('...HEAD', '');
    }

    getUnreleasedTitleRowIndex() {
        if (this.unreleasedTitleRowIndex) {
            return this.unreleasedTitleRowIndex;
        }

        this.unreleasedTitleRowIndex = this.splittedContent.findIndex(
            (r) => r === UNRELEASED_TITLE
        );
        return this.unreleasedTitleRowIndex;
    }

    withReplaceUnreleasedTitle(newHeaderText) {
        this.splittedContent[
            this.getUnreleasedTitleRowIndex()
        ] = `## [${newHeaderText}]`;

        return this;
    }

    withAddUnreleasedTitle() {
        this.splittedContent.splice(
            this.getUnreleasedTitleRowIndex(),
            0,
            `${UNRELEASED_TITLE}\n\n`
        );

        return this;
    }

    withRemoveLastRow() {
        this.splittedContent.pop();

        return this;
    }

    withAddNewVersionCompereLink(lastVersion, newVersion) {
        this.splittedContent.push(
            `[${newVersion}]: ${REPO_URL}/compare/v${lastVersion}...v${newVersion}`
        );

        return this;
    }

    withUpdateUnreleasedCompereLink(lastVersion, newVersion) {
        const unreleasedCompereLinkIndex = this.splittedContent.findIndex(
            (r) =>
                r === `[unreleased]: ${REPO_URL}/compare/v${lastVersion}...HEAD`
        );
        this.splittedContent[
            unreleasedCompereLinkIndex
        ] = `[unreleased]: ${REPO_URL}/compare/v${newVersion}...HEAD`;

        return this;
    }
}

function validateArgs() {
    let validationPassed = true;
    const paramsMessage =
        'Please follow the following params:\n\nnode scripts/helper/changelogUpdater.js <NEW_VERSION> <GITHUB_SERVER_URL> <GITHUB_REPOSITORY>';
    if (!NEW_VERSION) {
        console.log('* Missing new version arg.');
        validationPassed = false;
    }
    if (!GITHUB_SERVER_URL) {
        console.log('* Missing GitHub server URL arg.');
        validationPassed = false;
    }
    if (!GITHUB_REPOSITORY) {
        console.log('* Missing GitHub repository name arg.');
        validationPassed = false;
    }

    if (!validationPassed) {
        console.log(paramsMessage);
        process.exit(1);
    }
}

function main(newVersion) {
    const changelogFileContent = fs
        .readFileSync(CHANGELOG_FILE_PATH)
        .toString();

    let newChangelog = new Changelog(changelogFileContent);
    const lastVersion = newChangelog.getLastVersion();

    newChangelog = newChangelog
        .withReplaceUnreleasedTitle(newVersion)
        .withAddUnreleasedTitle()
        .withRemoveLastRow()
        .withAddNewVersionCompereLink(lastVersion, newVersion)
        .withUpdateUnreleasedCompereLink(lastVersion, newVersion);

    fs.writeFileSync(CHANGELOG_FILE_PATH, newChangelog.content);
}

validateArgs();
main(NEW_VERSION);
