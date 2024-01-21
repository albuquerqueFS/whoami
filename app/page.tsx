import { Badge } from 'lucide-react';

export default function Home() {
  const PostCard = ({ index, label }: { index: number; label: string }) => (
    <div className="flex bg-silver-400 px-3 py-2 text-slate-700">
      <span className="mr-2 rounded bg-slate-700 px-2 py-1 font-bold text-silver-400">
        #{index}
      </span>
      <span>{label}</span>
      <div>
        <Badge>front-end</Badge>
      </div>
    </div>
  );

  return (
    <div>
      <h1>LATEST FROM ME</h1>

      <ol>
        <li>
          <PostCard
            index={1}
            label="Handling API interfacing in Angular applications"
          ></PostCard>
        </li>
      </ol>
    </div>
  );
}
