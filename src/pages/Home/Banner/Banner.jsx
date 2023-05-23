
const Banner = () => {
    const logo = {
        position: 'absolute',
        top: '',
        left: '',
        width: '100%', /* Adjust the width as needed */
        height: '100%', /* Let the height adjust proportionally */
      }
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://media.istockphoto.com/id/1322274556/photo/collection-of-different-toys-on-wooden-table.jpg?s=612x612&w=0&k=20&c=DrcAYB7zglqgD3GuICJFLuxE9cBOvSJIlFAdOwrYZEE="
                    alt=""
                    style={logo}

                />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-error space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>TOY WORLD FOR KIDS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae, assumenda natus laborum fuga harum eaque asperiores inventore tenetur, vitae maiores rerum eos fugit doloribus voluptatibus! Iure non laboriosam error.</p>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    style={logo}
                />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-error space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>TOY WORLD FOR KIDS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae, assumenda natus laborum fuga harum eaque asperiores inventore tenetur, vitae maiores rerum eos fugit doloribus voluptatibus! Iure non laboriosam error.</p>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://media.istockphoto.com/id/1322274556/photo/collection-of-different-toys-on-wooden-table.jpg?s=612x612&w=0&k=20&c=DrcAYB7zglqgD3GuICJFLuxE9cBOvSJIlFAdOwrYZEE="
                    alt=""
                    style={logo}
                />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-error space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>TOY WORLD FOR KIDS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae, assumenda natus laborum fuga harum eaque asperiores inventore tenetur, vitae maiores rerum eos fugit doloribus voluptatibus! Iure non laboriosam error.</p>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    style={logo}
                />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-error space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>TOY WORLD FOR KIDS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae, assumenda natus laborum fuga harum eaque asperiores inventore tenetur, vitae maiores rerum eos fugit doloribus voluptatibus! Iure non laboriosam error.</p>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;