import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JdbcInsertExample {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/employee";
        String user = "root";
        String password = "yash@4272";

        String sql = "INSERT INTO employees (empcode, empname, empage, esalary) VALUES (?, ?, ?, ?)";

        int[][] data = {
            {101, 25, 10000},
            {102, 30, 20000},
            {103, 20, 40000},
            {104, 40, 80000},
            {105, 25, 90000}
        };

        String[] names = {"Jenny", "Jacky", "Joe", "John", "Shameer"};

        try (Connection con = DriverManager.getConnection(url, user, password);
             PreparedStatement ps = con.prepareStatement(sql)) {

            for (int i = 0; i < data.length; i++) {
                ps.setInt(1, data[i][0]);
                ps.setString(2, names[i]);
                ps.setInt(3, data[i][1]);
                ps.setInt(4, data[i][2]);
                ps.executeUpdate();
            }

            System.out.println("✅ Records inserted successfully!");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
