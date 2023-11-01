import {
    BarChart2,
    Bell,
    Bookmark,
    CalendarClock,
    Hash,
    Heart,
    HomeIcon,
    Image,
    List,
    Mail,
    MessageCircle,
    MoreHorizontal,
    Repeat2,
    Search,
    SmilePlus,
    Sparkles,
    Upload,
    User2,
    Video,
} from "lucide-react";

export default function Home() {
    return (
        <div className="h-screen max-w-[1280px] w-[95%] mx-auto flex">
            <aside className="w-[255px] flex flex-col justify-between p-5">
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <nav className="space-y-5 mt-5">
                        <a
                            href=""
                            className="flex items-center gap-4 font-semibold text-lg "
                        >
                            <HomeIcon />
                            Home
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-4 font-semibold text-lg "
                        >
                            <Hash />
                            Explore
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-4 font-semibold text-lg "
                        >
                            <Bell />
                            Notifications
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-4 font-semibold text-lg "
                        >
                            <Mail />
                            Messages
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-4 font-semibold text-lg "
                        >
                            <Bookmark />
                            Bookmarks
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-4 font-semibold text-lg "
                        >
                            <List />
                            Lists
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-4 font-semibold text-lg "
                        >
                            <User2 />
                            Profile
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-4 font-semibold text-lg "
                        >
                            <MoreHorizontal />
                            More
                        </a>
                    </nav>

                    <button className="mt-8 bg-[#1DA1F2] py-3 rounded-full font-bold">
                        Tweet
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-16 h-12 bg-zinc-500 rounded-full"></div>

                    <div className="w-full flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="font-semibold ">edu</span>
                            <span className="text-white/50">@eduardo</span>
                        </div>

                        <MoreHorizontal />
                    </div>
                </div>
            </aside>

            <main className="flex-1 border-l border-r border-white/20 overflow-y-scroll overflow-hidden">
                <div className="w-full flex items-center justify-between p-6 border-b border-white/20">
                    <h1 className="font-bold text-lg">Home</h1>

                    <Sparkles className="text-[#1DA1F2]" />
                </div>

                <div className="p-4 flex flex-col gap-6 border-b border-white/20">
                    <div className="flex gap-3 justify-center">
                        <div className="w-12 h-12 bg-zinc-500 rounded-full"></div>
                        <div className="flex-1 flex flex-col gap-6 justify-center">
                            <span className="text-lg font-semibold text-white/40 mt-2">
                                What’s happening?
                            </span>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-[#1DA1F2]">
                                    <Image size={24} />
                                    <Video size={24} />
                                    <BarChart2 size={24} />
                                    <SmilePlus size={24} />
                                    <CalendarClock size={24} />
                                </div>

                                <button className="bg-[#1DA1F2] py-2 px-6 rounded-full font-bold">
                                    Tweet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex gap-3 border-b border-white/20 p-4">
                        <div className="w-12 h-12 bg-zinc-500 rounded-full"></div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">edu</span>
                                <span className="text-white/50">@eduardo</span>
                                <div className="w-1 h-1 bg-white/50 rounded-full mt-1"></div>
                                <span className="text-white/50">23s</span>
                            </div>

                            <p>Don't overpay on Amazon ever again!</p>

                            <div className="w-full h-[247px] bg-white/20 rounded-2xl mt-3"></div>

                            <div className="w-full flex items-center justify-between text-white/60 mt-4">
                                <div className="flex items-center gap-2">
                                    <MessageCircle size={20} />
                                    <span className="text-sm">61</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Repeat2 size={20} />
                                    <span className="text-sm">12</span>
                                </div>

                                <div className="flex items-center gap-2 text-[#F4245E]">
                                    <Heart size={20} fill="#F4245E" />
                                    <span className="text-sm">6.2K</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Upload size={20} />
                                    <span className="text-sm">61</span>
                                </div>
                            </div>

                            <p className="text-[#1DA1F2] pt-6">
                                Show this thread
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 border-b border-white/20 p-4">
                        <div className="w-12 h-12 bg-zinc-500 rounded-full"></div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">edu</span>
                                <span className="text-white/50">@eduardo</span>
                                <div className="w-1 h-1 bg-white/50 rounded-full mt-1"></div>
                                <span className="text-white/50">23s</span>
                            </div>

                            <p>Don't overpay on Amazon ever again!</p>

                            <div className="w-full h-[247px] bg-white/20 rounded-2xl mt-3"></div>

                            <div className="w-full flex items-center justify-between text-white/60 mt-4">
                                <div className="flex items-center gap-2">
                                    <MessageCircle size={20} />
                                    <span className="text-sm">61</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Repeat2 size={20} />
                                    <span className="text-sm">12</span>
                                </div>

                                <div className="flex items-center gap-2 text-[#F4245E]">
                                    <Heart size={20} fill="#F4245E" />
                                    <span className="text-sm">6.2K</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Upload size={20} />
                                    <span className="text-sm">61</span>
                                </div>
                            </div>

                            <p className="text-[#1DA1F2] pt-6">
                                Show this thread
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 border-b border-white/20 p-4">
                        <div className="w-12 h-12 bg-zinc-500 rounded-full"></div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">edu</span>
                                <span className="text-white/50">@eduardo</span>
                                <div className="w-1 h-1 bg-white/50 rounded-full mt-1"></div>
                                <span className="text-white/50">23s</span>
                            </div>

                            <p>Don't overpay on Amazon ever again!</p>

                            <div className="w-full h-[247px] bg-white/20 rounded-2xl mt-3"></div>

                            <div className="w-full flex items-center justify-between text-white/60 mt-4">
                                <div className="flex items-center gap-2">
                                    <MessageCircle size={20} />
                                    <span className="text-sm">61</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Repeat2 size={20} />
                                    <span className="text-sm">12</span>
                                </div>

                                <div className="flex items-center gap-2 text-[#F4245E]">
                                    <Heart size={20} fill="#F4245E" />
                                    <span className="text-sm">6.2K</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Upload size={20} />
                                    <span className="text-sm">61</span>
                                </div>
                            </div>

                            <p className="text-[#1DA1F2] pt-6">
                                Show this thread
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 border-b border-white/20 p-4">
                        <div className="w-12 h-12 bg-zinc-500 rounded-full"></div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">edu</span>
                                <span className="text-white/50">@eduardo</span>
                                <div className="w-1 h-1 bg-white/50 rounded-full mt-1"></div>
                                <span className="text-white/50">23s</span>
                            </div>

                            <p>Don't overpay on Amazon ever again!</p>

                            <div className="w-full h-[247px] bg-white/20 rounded-2xl mt-3"></div>

                            <div className="w-full flex items-center justify-between text-white/60 mt-4">
                                <div className="flex items-center gap-2">
                                    <MessageCircle size={20} />
                                    <span className="text-sm">61</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Repeat2 size={20} />
                                    <span className="text-sm">12</span>
                                </div>

                                <div className="flex items-center gap-2 text-[#F4245E]">
                                    <Heart size={20} fill="#F4245E" />
                                    <span className="text-sm">6.2K</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Upload size={20} />
                                    <span className="text-sm">61</span>
                                </div>
                            </div>

                            <p className="text-[#1DA1F2] pt-6">
                                Show this thread
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <aside className="w-[350px] ml-10 py-5">
                <div className="flex flex-col gap-4">
                    <div className="flex-1 bg-white/10 rounded-full flex items-center gap-4 p-3 text-white/60">
                        <Search />
                        <span>Search Twitter</span>
                    </div>

                    <div className="bg-zinc-400/5 rounded-xl">
                        <div className="w-full border-b border-white/20 p-3">
                            <h1 className="text-xl font-bold">
                                What’s happening
                            </h1>
                        </div>

                        <div className="flex gap-4 p-3 border-b border-white/20 overflow-hidden">
                            <div className="flex flex-col justify-center gap-2">
                                <div className="flex items-center gap-2 text-white/50">
                                    <span>COVID 19</span>
                                    <div className="w-1 h-1 bg-white/50 rounded-full mt-1"></div>
                                    <span>Last night</span>
                                </div>
                                <p className="font-semibold">
                                    India vs Australia: India hold on to earn a
                                    draw on Day 5 in Sydney Test
                                </p>
                                <p className="text-md font-medium text-white/50">
                                    Trending with
                                    <span className="ml-2 text-[#1DA1F2]">
                                        #covid19
                                    </span>
                                </p>
                            </div>
                            <div className="w-60 h-24 bg-white/20 rounded"></div>
                        </div>
                        <div className="flex gap-4 p-3 border-b border-white/20">
                            <div className="flex flex-col justify-center gap-2">
                                <div className="flex items-center gap-2 text-white/50">
                                    <span>US news</span>
                                    <div className="w-1 h-1 bg-white/50 rounded-full mt-1"></div>
                                    <span>4h ago</span>
                                </div>
                                <p className="font-semibold">
                                    India vs Australia: India hold on to earn a
                                    draw on Day 5 in Sydney Test
                                </p>
                                <p className="text-md font-medium text-white/50">
                                    Trending with
                                    <span className="ml-2 text-[#1DA1F2]">
                                        #trump
                                    </span>
                                </p>
                            </div>
                            <div className="w-60 h-24 bg-white/20 rounded"></div>
                        </div>
                        <div className="flex justify-between gap-4 p-3 border-b border-white/20">
                            <div className="flex flex-col justify-center gap-2">
                                <div className="flex items-center gap-2 text-white/50">
                                    <span>India</span>
                                    <div className="w-1 h-1 bg-white/50 rounded-full mt-1"></div>
                                    <span>1h ago</span>
                                </div>
                                <p className="font-semibold">
                                    India vs Australia: India hold on to earn a
                                    draw on Day 5 in Sydney Test
                                </p>
                                <p className="text-md font-medium text-white/50">
                                    Trending with
                                    <span className="ml-2 text-[#1DA1F2]">
                                        #sport
                                    </span>
                                </p>
                            </div>
                            <div className="w-60 h-24 bg-white/20 rounded"></div>
                        </div>

                        <div className="flex items-center p-3">
                            <a href="" className="text-[#1DA1F2] font-medium">
                                Show more
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
