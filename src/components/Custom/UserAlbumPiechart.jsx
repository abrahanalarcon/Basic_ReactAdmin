import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const UserAlbumPieChart = ({ userCount, albumCount, photoCount, postCount }) => {
    const data = [
        { name: 'Usuarios', value: userCount },
        { name: 'Álbumes', value: albumCount },
        { name: 'Fotos', value: photoCount },
        { name: 'Publicaciones', value: postCount },
    ];

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Colores para cada segmento

    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default UserAlbumPieChart;

