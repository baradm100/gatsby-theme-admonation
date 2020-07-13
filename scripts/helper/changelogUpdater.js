const fs = require('fs');
const UNRELEASED_TITLE = '## [Unreleased]';
const UNRELEASED_LINK_PREFIX =
    '[unreleased]: https://github.com/baradm100/gatsby-theme-admonation/compare/v';
const NEW_VERSION = process.argv[2];

function findRow(splitLines, textToFind) {
    return splitLines.findIndex((r) => r == textToFind);
}

function replaceUnreleasedHeader(fileContent, newHeaderText) {
    return fileContent.replace(UNRELEASED_TITLE, `## [${newHeaderText}]`);
}

function getLastVersion(splitLines) {
    return splitLines
        .find((r) => r.startsWith(UNRELEASED_LINK_PREFIX))
        .replace(UNRELEASED_LINK_PREFIX, '')
        .replace('...HEAD', '');
}

function main() {
    const changelogFileContent = fs.readFileSync('./CHANGELOG.md').toString();
    const changelogSplitLine = changelogFileContent.split('\n');
    const unreleasedHeaderIndex = findRow(changelogSplitLine, UNRELEASED_TITLE);
    const lastTag = getLastVersion(changelogSplitLine);
    let updatedContent = replaceUnreleasedHeader(
        changelogFileContent,
        NEW_VERSION
    );

    updatedContent = updatedContent.split('\n');
    updatedContent.splice(unreleasedHeaderIndex, 0, `${UNRELEASED_TITLE}\n\n`);
    updatedContent.pop();
    updatedContent.push(
        `[${NEW_VERSION}]: https://github.com/baradm100/gatsby-theme-admonation/compare/v${lastTag}...v${NEW_VERSION}`
    );
    updatedContent.push('');
    updatedContent = updatedContent
        .join('\n')
        .replace(
            `[unreleased]: https://github.com/baradm100/gatsby-theme-admonation/compare/v${lastTag}...HEAD`,
            `[unreleased]: https://github.com/baradm100/gatsby-theme-admonation/compare/v${NEW_VERSION}...HEAD`
        );

    fs.writeFileSync('./CHANGELOG.md', updatedContent);
}

main();
