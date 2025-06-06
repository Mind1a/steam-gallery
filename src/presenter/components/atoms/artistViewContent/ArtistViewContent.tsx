export default function ArtistViewContent() {
  return (
    <div className="flex flex-col flex-1 gap-12 px-[49px]">
      <section className="flex justify-between mt-[60px] max-w-[1442px]">
        <div className="grid grid-cols-3 grid-rows-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-[600] text-[#8B0000] text-[32px]">პროდუქტი</h2>
          <p className="font-[300] text-[#333] text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis q~ias error harum maxime
            adipisci amet laborum. Perspiciatis
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-4 max-w-[1442px]">
        <p className="text-[#5C4033] text-2xl uppercase">see also</p>
        <div>
          <div>CARD</div>
          <div>CARD</div>
          <div>CARD</div>
          <div>CARD</div>
          <div>CARD</div>
          <div>CARD</div>
        </div>
      </section>
    </div>
  );
}
