import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';

function Main() {
    const [value, setValue] = useState()
    const { speak, voices } = useSpeechSynthesis()
    const [voiceIndex, setVoiceIndex] = useState(null);
    function handleSpeak() {
        speak({ text: value, voice: voices[voiceIndex] })
    }
    console.log(voices)


    return (
        <div>
            <div className='max-w-[400px] w-full m-auto px-2'>
                <div className="relative pt-10 rounded-md shadow-sm w-full">
                    <label htmlFor="Сonvert" className="block text-sm font-medium leading-6 text-gray-900">
                        Сonvert text to voice
                    </label>
                    <textarea
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        type="text"
                        name="convert"
                        id="convert"
                        className="block w-full resize-none h-[130px] rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Your text"
                    />
                </div>
                <div className='w-full'>
                    <select
                    className='w-full h-[30px] rounded-md mt-3'
                        name="voice"
                        value={voiceIndex || ''}
                        onChange={(e) => {
                            setVoiceIndex(e.target.value)
                        }}
                    >
                        {voices.map((item, index) => (
                            <option key={item.name} value={index}>
                                {`${item.lang} - ${item.name}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex justify-end'>
                    <button onClick={() => handleSpeak()} class="rounded-md mt-3 bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Play
                    </button>
                </div>

            </div>


        </div>
    )
}

export default Main
