import DynamicTypewriter from "../components/DynamicTypewriter"
import styles from "./page.module.css"

const messages = [
  "Hi we are eyecognito, we like to build stuff",
  "we speed ran this home page so not much to see here lol",
  "why are you still here",
  "i swear there is not much to see here",
  "okay , here is a joke since you're still here, Why did the LLM go broke? It kept generating too many free ideas without paying attention to the token limit!",
]

export default function Home() {
  return (
    <div className={`${styles.content} bg-gray-900`}>
      <DynamicTypewriter messages={messages} />
    </div>
  )
}

