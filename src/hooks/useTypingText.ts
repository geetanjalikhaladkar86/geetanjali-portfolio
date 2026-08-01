import { useEffect, useState } from "react";

export function useTypingText(words: string[], typeMs = 90, deleteMs = 45, holdMs = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    } else {
      timeout = setTimeout(
        () =>
          setText((t) => (deleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1))),
        deleting ? deleteMs : typeMs,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}
