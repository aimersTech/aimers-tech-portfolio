import { Aimers } from '@/constants/aimersDetails';
import AvatarCard from '@/components/ui/AvatarCard';

const KnowTheAimers = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-start py-16">
        <h2 className="text-white text-[40px] underline font-semibold mb-6">
          Know The <span className="text-[#1DE5DB]">Aimers</span>
        </h2>
        <p className="text-white text-base lg:text-xl max-w-6xl leading-relaxed">
          Aimers Tech Global was founded by a team of passionate <br /> innovators with a shared vision to blend technology, design, and <br /> research into impactful solutions. Their leadership, creativity, and <br /> dedication continue to drive our mission forward every day.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {Aimers.map((member, index) => (
          <AvatarCard key={index} index={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default KnowTheAimers;
