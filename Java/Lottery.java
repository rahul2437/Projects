import java.util.Scanner;

class Lottery {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int winner[] = { 56, 85, 64, 23, 15 };
    int n = sc.nextInt();
    boolean flag = false;
    for (int i = 0; i < n; i++) {
      if (winner[i] == n) {
        flag = true;
        break;
      }
    }
    System.out.println(flag ? "Winner" : "Looser");
  }
}