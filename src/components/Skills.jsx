import React from 'react'
import {html, css, next, aws, react, three, js, ts, tailwind, cpp, redux, git, node, mongodb} from '../assets'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { Tilt } from 'react-tilt'

const skills = [
    {
        name: 'html',
        icon : html
    },
    {
        name: 'css',
        icon : css
    },
    {
        name: 'react',
        icon : react
    },
    {
        name: 'next',
        icon : next
    },
    {
        name: 'three',
        icon : three
    },
    {
        name: 'tailwind',
        icon : tailwind
    },
    {
        name: 'node',
        icon : node
    },
    {
        name: 'git',
        icon : git
    },
    {
        name: 'aws',
        icon : aws
    },
    {
        name: 'js',
        icon : js
    },
    {
        name: 'ts',
        icon : ts
    },
    {
        name: 'cpp',
        icon : cpp
    },

]

function Skills() {
  return (
    <div className='w-full mx-auto flex justify-center items-center'>
        <div className='flex flex-row my-10 flex-wrap justify-evenly gap-8 items-center'>
            {
                skills.map(({name, icon}) => (
                    <div key={name} className='green-pink-gradient p-[1px] rounded-full'>
                        <Tilt  className='w-32  h-32 flex items-center justify-center object-cover overflow-hidden rounded-full bg-subtitle'>
                            <img src={icon} alt={name} className='w-20 ' />
                        </Tilt>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills