import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true, 
    }, 
    avatar:{
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAANlBMVEX///+ZmZmWlpaTk5OPj4/19fW+vr60tLT4+PjBwcHQ0NDIyMjv7++pqanY2Nienp7m5ubg4OCs+mTnAAAEcklEQVR4nO1b69KrIAysgKIooO//skdr61crZIPS1jnj/utMxTV3QrjdLly4cOHChf8PdTeYttJ3VK0Zuvqrr+9MZaVSUiyYftnKdF95fem0UEIUW4xMlNCu/Oz760F7GXr9Hw/p9fA5ndQteP/Cov0MibKSEr9/hpRNfn2UDUcAr6LITcJ4tgQWSXiTkUBnkwncSdhsTtqqJB38Qag2C4FynwiegshgEX2xUwQPQRT9UQbugAgegnDHGDSHGYwcmiMMqgwMRg7Vrxkc4ZCLwX4ODDsQ8g7sM/vsAfrCmBHHKsW5sX7BGXSPX/SAgZD2rzopnUUkZHJ8KNFX2bclexhEU+OkpT9KBoJ/S3MQNo0BWi6oWZdOO45OkYupIfzYAB5Lyd20GlTUuh3JIUUVhlSD0PEnNcldsuuo0lPrFAUhz45+0nO9gg6LdLClgzo3SJbAG0ij6oBX8MRQ0dslYFO0JQuWGGpaCMi7QUSRnH0WWEOBWN/TsYETn2rgDgpos6QpFB6LYQDZBkkS6LGQkcj6Ajq4HKdABbYZKCwdpoDDE6yVjtoCrp+QHqJZ8gmQLRmagCUrCi4NrGUlvQAoFCZY0hhqCxcAZYNh1ONkbEJV7whBp2w6P8wrkLqEtjQuQO9rQNUKxcAQAkh00KnnNeILsHoRZGhhWGNBFS28XShpj9CpHxwi6Q4k2YUCFVrouvWFQ1AO3J04WcUyP2MyqY0w+Z1BsmZg+OSTQ9GukkXZ8ttipFcyvPrvW4pq0elQFQntEDKypFCY9veqsFrbQiX2p/NRuC8ngscj36IwtXnup0IyjUYeCqMOpNeNMW6EMY32kq+NDBSkstX2CKp0lVW8AE9R4CRK6ZvYgWDdNZyjI9IpcWiS3tEli8OHJ2RoQgFaFozenUMxggzQIE3JhnXyVoOmKZmmyGQtwk2uoCBILyWTNVmyCLwVWzBQFOjdEFG4pbVPiQoOdCjiXok29RsOUZ2C8jVaxKf1LSdEHRwU8TF7TO3eTogpFXVAI9TpHlfkcyIUwIYukiWA+iIIGxbc1oY390nd4wVhrcLNfbDFgTsjYQRFijuwocf2nnaGRMr4nFC7CxlQFKG1cIwNNP32eOSMgF8ymn6BkMLv4b9jm/xZIW6bqlLy0xrbbMVqAAfcefcwxuZ4gtcG3x4GcNQXxsawmIcBmyOR3dY42uMbA+658Vt42u8QG5dgHwy9GfLe2DhhHehSXGtFPhuFJHGuEkw2CmnJ7jU+5bKF1MLr9dlAV4eHfr1K4tOr4QGhrEkePxhau64Xkoes1lX41EXwlRn6rkRHImXXOzNNZq63M+kjFKEj8KmXUXhvrdZV07Rzc2GGMW3bVFpb6/38vzfsKzlibcR53jYAoumzd6Tn90NFZxitOsOAWZ4xO3VozO4Mw4ZnGLk8w+Dp7QTjt7czDCHfTjCKfTvDQPrtBGP5E35+OeFO4tdXNO4onZYqmJWniyry4xdVHnhe11nu68ivXtd54seXli5cuHDhwoXv4B9JBzAyNJpG4AAAAABJRU5ErkJggg==",
    },
}, 
    {timestamps: true}
);
const User = mongoose.model('User', userSchema);
export default User;