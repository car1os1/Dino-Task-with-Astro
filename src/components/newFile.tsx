import uncheck from "/unchecked.png";

<Fragment>
    <div class="sm:mx-7 md:mx-7 p-9 bg-slate-500 py-10 rounded-lg">
        <div>
            <h2 class="text-white font-bold text-lg">To-Do List</h2>

            <div class="flex flex-row justify-around mt-3 bg-slate-100 rounded-full mb-10">
                <label class="relative block w-full">
                    <input class="sm:text-sm outline-none bg-transparent w-5/6 p-3 font-medium rounded-full" placeholder="Add your task" type="text" />
                    <img src={uncheck} alt="" />
                </label>
                <button class="pl-7 pr-7 bg-red-400 border-1 rounded-full outline-none border-red-400 font-bold text-white">Add</button>
            </div>
            <div class="px-10 relative">
                <ul>

                    <li class="my-2 cursor-pointer relative">task2</li>
                    <li class="my-2 cursor-pointer relative">task3</li>
                </ul>
            </div>
        </div>
    </div>
    <style>{`
    ul li::before {
        background-color: beige;
        content: "";
        position: absolute;
        height: 28px;
        width: 28;
        border-radius: 50%;
        background-image: url(/unchecked.png);
        background-size: cover;
        background-position: center;
        top: 12px;
        left: 8%;
    }
`}</style>

</Fragment>;
