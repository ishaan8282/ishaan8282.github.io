import { PerspectiveCamera, View } from "@react-three/drei";
import SkillCardScene from "../ThreeScenes/SkillCardScene";

function SkillCard({ skill, index, active, onActivate, onDeactivate }) {
  const { name, icon: Icon, tone } = skill;

  return (
    <article
      className="reveal skill-card group relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5"
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      tabIndex={0}
    >
      <View className="skill-scene-view absolute inset-0 transition duration-500 opacity-45 group-hover:opacity-85">
        <PerspectiveCamera makeDefault position={[0, 0, 3.2]} fov={42} />
        <ambientLight intensity={0.8} />
        <pointLight position={[2, 2, 2]} intensity={2.1} />
        <pointLight position={[-2, -1, 2]} intensity={1.1} color="#8b5cf6" />
        <SkillCardScene index={index} active={active} />
      </View>
      <div className="skill-card-content relative z-10 flex h-full flex-col justify-between">
        <div className={`skill-icon-orb flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} text-3xl text-ink`}>
          <Icon />
        </div>
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-slate-400">Core Skill</p>
          <h3 className="text-2xl font-black text-white">{name}</h3>
        </div>
      </div>
    </article>
  );
}

export default SkillCard;
