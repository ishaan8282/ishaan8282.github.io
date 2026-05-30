import React from 'react'
import styled from "./Skills.module.css"
import { AiFillGithub } from "react-icons/ai"
import { FaReact, FaVuejs } from "react-icons/fa"
import { SiRedux, SiMysql, SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si"
import { AiOutlineHtml5 } from "react-icons/ai"
import { FaCss3Alt } from "react-icons/fa"
import { DiNodejs, DiMongodb, DiAws, DiLaravel } from "react-icons/di"

const skills = [
    { icon: FaVuejs,         label: "Vue.js"     },
    { icon: DiLaravel,       label: "Laravel"    },
    { icon: FaReact,         label: "React"      },
    { icon: AiOutlineHtml5,  label: "HTML"       },
    { icon: FaCss3Alt,       label: "CSS"        },
    { icon: SiMysql,         label: "MySQL"      },
    { icon: AiFillGithub,    label: "GitHub"     },
    { icon: SiJavascript,    label: "JavaScript" },
    { icon: SiTailwindcss,   label: "Tailwind"   },
    { icon: SiBootstrap,     label: "Bootstrap"  },
    { icon: DiAws,           label: "AWS"        },
    { icon: DiNodejs,        label: "Node.js"    },
]

const Skills = () => {
  return (
    <div id="skills">
      <h1 className={styled.heading}>Skills</h1>
      <div className={styled.flex}>
        {skills.map(({ icon: Icon, label }) => (
          <div key={label} className={styled.card}>
            <Icon className={styled.icon} />
            <span className={styled.label}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills