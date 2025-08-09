import SectionTitle from "@/components/custom/SectionTitle";

const MySkillsSection = () => (
  <section
    id="Skills"
    className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
  >
    {/* Title */}
    <div className="w-full flex justify-center mb-12 md:mb-16">
      <SectionTitle>
        My <span className="text-main">Skills</span>
      </SectionTitle>
    </div>

    {/* Skills Grid */}
    <div
      className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 items-center"
      data-aos="zoom-in-up"
    >
      {/* Frontend */}
      <div className="flex flex-col items-center bg-[#2d343f] rounded-[28px] border border-transparent shadow-[0_0_20px_rgb(var(--main-color))] p-10 min-h-[370px] max-w-[340px] mx-auto transition-all duration-500 hover:border-main hover:scale-[1.03] cursor-pointer">
        <div className="mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-[12px] bg-main/10 mb-2">
            <i className="ri-code-s-slash-line text-[30px] text-main"></i>
          </div>
        </div>
        <h3 className="text-[30px] font-bold mb-5 text-center">Frontend</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">TypeScript</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">SCSS</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">Tailwind CSS</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">Redux</span>
        </div>
      </div>

      {/* Backend */}
      <div className="flex flex-col items-center bg-[#2d343f] rounded-[28px] border border-transparent shadow-[0_0_20px_rgb(var(--main-color))] p-10 min-h-[370px] max-w-[340px] mx-auto transition-all duration-500 hover:border-main hover:scale-[1.03] cursor-pointer">
        <div className="mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-[12px] bg-main/10 mb-2">
            <i className="ri-server-line text-[30px] text-main"></i>
          </div>
        </div>
        <h3 className="text-[30px] font-bold mb-5 text-center">Backend</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">.NET</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">C#</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">REST API</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">Entity Framework</span>
        </div>
      </div>

      {/* Database */}
      <div className="flex flex-col items-center bg-[#2d343f] rounded-[28px] border border-transparent shadow-[0_0_20px_rgb(var(--main-color))] p-10 min-h-[370px] max-w-[340px] mx-auto transition-all duration-500 hover:border-main hover:scale-[1.03] cursor-pointer">
        <div className="mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-[12px] bg-main/10 mb-2">
            <i className="ri-database-2-line text-[30px] text-main"></i>
          </div>
        </div>
        <h3 className="text-[30px] font-bold mb-5 text-center">Database</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">SQL Server</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">PostgreSQL</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">MongoDB</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">Redis</span>
        </div>
      </div>

      {/* Tools & Others */}
      <div className="flex flex-col items-center bg-[#2d343f] rounded-[28px] border border-transparent shadow-[0_0_20px_rgb(var(--main-color))] p-10 min-h-[370px] max-w-[340px] mx-auto transition-all duration-500 hover:border-main hover:scale-[1.03] cursor-pointer">
        <div className="mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-[12px] bg-main/10 mb-2">
            <i className="ri-tools-line text-[30px] text-main"></i>
          </div>
        </div>
        <h3 className="text-[30px] font-bold mb-5 text-center">Tools & Others</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">Docker</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">RabbitMQ</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">Git</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">Postman</span>
          <span className="px-3 py-1 bg-main/10 text-main rounded-full text-sm">Unit Testing</span>
        </div>
      </div>
    </div>
  </section>
);

export default MySkillsSection;
