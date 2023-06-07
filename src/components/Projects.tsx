import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export default function Projects() {
  const projects = [
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      image:
        "https://lh3.googleusercontent.com/pw/AJFCJaUY48HYkYVJ9xw9WkzDNxtF-YrwGyz3cfWUUF3sqqatY-KsIO-kNiF0cFAyCKYZSzyBZjJc5AKM-Ui1_9RA274CEUxscPqc0o_WwN5bpAYfWCdzYLcR0p4QnmpYE1LsTlKHca4rqscqSho3aSqSHMl2=w1733-h975-s-no?authuser=0",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 2",
      description: "Descrição do projeto 2",
      image:
        "https://lh3.googleusercontent.com/pw/AJFCJaWP1bleQaUV51rDivYUQUDGz0xrazSliiBrkO9pPE1FSoTSC2fp5jmFIgTIr0V-6EjTkXP8DSVE-v8nXsevpSdh_J_RZq6qGju8fKLlENhmWyzRFo2-5LwhSXNW5FtUR4vqfZwz5-v6cH0lAWG8FGX1=w1733-h975-s-no?authuser=0",
      link: "#",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Projeto 3",
      description: "Descrição do projeto 3",
      image:
        "https://lh3.googleusercontent.com/pw/AJFCJaUXNOOPeuqzz0i5rH2_Zyc1DA_t8Xm11lh9Uyvxhp1VLSmsnwqiqRF4afkOz0Anr1hNPNp2mSPFrY_xwkVVxOiLLV5RXR8FfmUuJiJ8G5RszKGyRQ3c28vmll9bOcn0hiSKAbpwp27hJUvdCHxGX2Au=w1733-h975-s-no?authuser=0",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 4",
      description: "Descrição do projeto 4",
      image:
        "https://lh3.googleusercontent.com/pw/AJFCJaXlbPM8g_Ql8SG-HsQZkI3pu55IxAbzH43kgllGTxCUqnS27dzzFJkVZTwgsbhxP3KafEWXCs3BGpidyLSvxKdBghGhx1dxkA_a07KhqPY5FJJgsNIW-yziMjomPqVAhOh_7pOLahAfUt_A7XlJA6eu=w731-h975-s-no?authuser=0",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 5",
      description: "Descrição do projeto 5",
      image:
        "https://lh3.googleusercontent.com/pw/AJFCJaUicEjVjSDQmTCg-8VQsYFysy7B6i8KQmZZDJuVrncT5oONoHjJy_nnjJcJD9B_t8V0abY7F2qqOKCajOX4yvL6Btsmy5BMOs9YFU9ZcOXo09ffWF9151csrogRDRa1cXDbA9aemHVVy2ndXZLgdrWN=w731-h975-s-no?authuser=0",
      link: "#",
      colSpan: "col-span-1",
    },
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador front-end.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}
