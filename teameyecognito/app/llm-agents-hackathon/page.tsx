import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  { name: "Siddarth Sairaj", photo: "/sid.png", social: "https://www.linkedin.com/in/siddarth-sairaj/" },
  { name: "Sainath Ganesh", photo: "/sai.jpg", social: "https://www.linkedin.com/in/furyswordxd/" },
  { name: "Dean Deng", photo: "/dean.jpeg", social: "https://www.linkedin.com/in/dhtdean/" },
  { name: "Angie Hu", photo: "/angie.png", social: "https://www.linkedin.com/in/a-hu/" },

]

export default function LLMAgentsHackathon() {
  return (
    <div className="space-y-8">
      <br></br>
      <h1 className="text-3xl font-bold">UC Berkeley LLM Agents Hackathon</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
        <p>
          Team Eyecognito won Applications Track: Building innovative LLM agent applications across diverse domains,
          from coding assistants to personal AI companions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Team</h2>
        <p>Team of Software / AI Engineers</p>
        <br></br>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Some cool pic</th>
                <th className="py-2 px-4 text-left">Social Media</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="py-2 px-4 text-black">{member.name}</td>
                  <td className="py-2 px-4">
                    <Image
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4">
                    <Link
                      href={member.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Reach out
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Project Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/HUXjFbvmS44"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

