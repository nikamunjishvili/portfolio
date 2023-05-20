import Link from "next/link"
import Layout from "../layout"

const Footer = () => {
  return (
    <footer className="w-full border-solid border-t-2 border-dark font-medium text-lg">
        <Layout className="py-8 flex items-center justify-between">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <span>N.Munjishvili</span>
            <span>say hello</span>
        </Layout>
    </footer>
  )
}

export default Footer