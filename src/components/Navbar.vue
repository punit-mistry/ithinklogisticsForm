<template>
    <div class="bg-blue-500 h-14  flex items-center justify-between pl-10 pr-10">

        <span class=" text-white font-bold text-3xl uppercase">
            <RouterLink to="/" ><img src="https://itl-website-aws.s3.ap-south-1.amazonaws.com/manage/assets/images/logo-cl.svg" class="bg-white"/></RouterLink> 
            
        </span>
        <div class="flex gap-5">

            <button class="bg-green-500 text-xs w-20 md:p-2 text-white rounded-lg">
                <RouterLink to="/" >Goto Form</RouterLink> 
            </button>
            <button class="bg-red-500 p-2 text-white rounded-lg">
                <RouterLink to="/table" >View Data </RouterLink>
            </button>
        </div>
        
    </div>
</template>