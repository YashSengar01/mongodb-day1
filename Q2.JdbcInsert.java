import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JdbcInsertExample {

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/employee";
        String user = "root"; // DB username
        String password = "yash@4272"; // DB password

        String insertQuery = "INSERT INTO employees (empcode, empname, empage, esalary) VALUES (?, ?, ?, ?)";

        Object[][] employees = {
            {101, "Jenny", 25, 10000},
            {102, "Jacky", 30, 20000},
            {103, "Joe", 20, 40000},
            {104, "John", 40, 80000},
            {105, "Shameer", 25, 90000}
        };

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(insertQuery)) {

            for (Object[] emp : employees) {
                pstmt.setInt(1, (Integer) emp[0]);
                pstmt.setString(2, (String) emp[1]);
                pstmt.setInt(3, (Integer) emp[2]);
                pstmt.setInt(4, (Integer) emp[3]);
                pstmt.executeUpdate();
            }

            System.out.println("Data inserted successfully!");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

