import UserCard from '@/components/UserCard/UserCard';

export default function Page() {
  const users = [
    { id: 1, name: 'Asha',  role: 'Frontend' },
    { id: 2, name: 'Rahul', role: 'Backend'  },
    { id: 3, name: 'Meera', role: 'QA'       },
  ];

  return (
    <div>
      <h2>Parent → Child via props</h2>
      {
        users.map(u => (
          <UserCard key={u.id} name={u.name} role={u.role} />
        ))
      }
    </div>
  );
}
