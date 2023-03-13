package vrcafe.models;



import java.util.concurrent.atomic.AtomicInteger;

/**
 *
 * Class to connect User to Achievement
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   05/3/2023
 */


public class User_Achievement {

    private static final AtomicInteger idGenerator = new AtomicInteger(0);

    private Integer id;
    private String userId;
    private String achievementId;
    private int progress;

    public User_Achievement(Integer id, String userId, String achievementId, int progress) {
        this.id = id;
        this.userId = userId;
        this.achievementId = achievementId;
        this.progress = progress;
    }

    public User_Achievement() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getAchievementId() {
        return achievementId;
    }

    public void setAchievementId(String achievementId) {
        this.achievementId = achievementId;
    }

    public int getProgress() {
        return progress;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }
}
