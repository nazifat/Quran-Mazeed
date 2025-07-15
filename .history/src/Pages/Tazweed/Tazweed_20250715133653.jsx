import React from 'react';
import '../Tazweed/Tazweed.css'

const Tazweed = () => {
    return (
        <div className='w-3/4 my-5 mx-auto tazweed-rules font-nunito leading-[2] md:p-10 p-2 custom-tazweed'>
            <h1 className='text-3xl text-center p-5'>Tazweed Rules</h1>
            <img className='shadow-xl rounded-lg  my-10' src="https://i.ibb.co/zWQrpgbc/learn-noorani-qaidah.webp" alt="" />
            <div className='space-y-10'>
                <h2>Meaning of Tajweed</h2>
                Tajweed is a familiar term for those who have learned to recite the Quran. The pure meaning of the word is ‘to perfect, to beautify, or to improve’. In Islam, it is a set of rules to help readers recite the Quran in the same way that Prophet Muhammad (pbuh) learned from Jibreel.

                <h2>Importance</h2>
                Not only does it beautify the recitation, but learning Tajweed also ensures the message is not distorted by mistake. Reciting without Tajweed could change the meaning of words as there are rules set in place to differentiate similar letters. Even incorrect elongations can alter the meaning.

                <h2>Benefits</h2>
                There are many benefits to reading the Quran. Here is a hadith specifically illustrating the reward of reciting beautifully narrated by A’ishah, may Allah be pleased with her:

                “One who recites the Quran beautifully, smoothly, and precisely will be in the company of noble angels. As for the one who recites it with difficulty, stammering or stumbling through its verses, (s)he will have twice that reward.” [Al-Bukhari]

                Even beginners are rewarded when struggling to recite correctly! Learning how to recite beautifully also gives the added benefit of wanting to recite the Quran more frequently as it sounds pleasant to the ears. Most importantly, Allah will take note of the effort and time that his servant put in to recite His words even if they never obtain perfection.

                <h2>Learning Tajweed</h2>
                It is recommended that one learns Tajweed from someone that has mastered it, as they can guide the student to learn each rule. It is difficult to hear one’s own mistakes when reciting, so reciting to a teacher helps greatly.

                One can still practice by themselves by recording the section they recite and listening to it alongside a professional reciter of the Quran (such as Sh. Mahmoud Khalil al-Husary, Mohammed Ayoub, or Mishary Alafasy). Anytime you want to practice or follow along, listening to professional reciters can help teach the correct pronunciation of letters and proper Tajweed rules.
            </div>
        </div>
    );
};

export default Tazweed;