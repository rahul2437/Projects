class Fact {
  public static void main(String[] args) {
    int n = 5;
    System.out.println(factorial(n));
  }

  static int factorial(int n) {
    if (n < 2)
      return 1;
    return n * factorial(n   - 1);
  }
}