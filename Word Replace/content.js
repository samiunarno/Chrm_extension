const wordsToBlock = ["badword1", "badword2", "badword3"]; // Add words you want to block

function blockWords() {
  let bodyText = document.body.innerHTML;

  wordsToBlock.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    bodyText = bodyText.replace(
      regex,
      '<span style="color: red;">[BLOCKED]</span>'
    );
  });

  document.body.innerHTML = bodyText;
}

blockWords();
