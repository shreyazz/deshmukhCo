const response = await fetch('https://dsc-api.vercel.app/api/blog/getAll');
const data = await response.json();
import defaultBlogImg from '../assets/defalutBanner.webp'
const blogs = data.blogs;
export default function ReactComponent({children}) {

  return (
    <>

     {
        blogs.map((b,id) => {
                return <div key={id} class="p-4 flex flex-col gap-3 ">
                  {b.image ? <img src={b.image} alt="" class="h-[100%] w-[100%] rounded-md object-cover" /> : <img src={defaultBlogImg} alt="" class="h-[100%] w-[100%] rounded-md" />}
                  <span class="px-2 py-1 border border-gold w-[fit-content] rounded-md text-[#4242429e]">{b.category}</span>
                  <h2 class="text-2xl text-darkBlue font-medium">{b.title}</h2>
                  <a href={`/blogs/${b._id}`} class="p-0 hover:text-gold ease-in transition-all duration-150 text-black w-[fit-content] rounded-md font-normal">Read More...</a>
                  </div>
            })
     }
     </>

  )
}