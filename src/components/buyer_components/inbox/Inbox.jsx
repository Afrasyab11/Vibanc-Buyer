"use client"
import React, { useState } from 'react';
import Messages from './Messages';
import Notifications from './Notifications';

export default function Inbox() {
    const [activeTab, setActiveTab] = useState('messages');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className='border-b border-[#53b3a8] mx-8'>
                <h1 className='mt-5 font-bold text-xl md:text-2xl text-[#1C2C29]'>Inbox</h1>
                <div className='flex mt-3 font-medium gap-x-12 text-sm'>
                    <h3 onClick={() => handleTabClick('messages')} className={`cursor-pointer relative ${activeTab === 'messages' ? 'text-[#1C2C29]' : 'text-zinc-400'}`}>
                        Messages
                        {activeTab === 'messages' && <span className="absolute left-0 bottom-0 bg-[#53b3a8] h-[2px] w-full transition-all duration-300"></span>}
                    </h3>
                    <h3 onClick={() => handleTabClick('notifications')} className={`cursor-pointer relative ${activeTab === 'notifications' ? 'text-[#1C2C29]' : 'text-zinc-400'}`}>
                        Notifications
                        {activeTab === 'notifications' && <span className="absolute left-0 bottom-0 bg-[#53b3a8] h-[2px] w-full transition-all duration-300"></span>}
                    </h3>
                </div>
            </div>

            {activeTab === 'messages' && <Messages />}
            {activeTab === 'notifications' && <Notifications />}
        </div>
    );
}
